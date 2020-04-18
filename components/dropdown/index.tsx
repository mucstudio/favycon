import React, { useState } from 'react'
import classnames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { SvgArrowDown } from 'components/svgs/svg-arrow-down'
import { SvgFavycon } from 'components/svgs/svg-favycon'
import { SvgAppycon } from 'components/svgs/svg-appycon'

import styles from './index.module.scss'

type DropdownProps = {
	label: string
	showApps: boolean
}

const Dropdown = ({ label, showApps }: DropdownProps) => {
	const [isOpen, toggleIsOpen] = useState(false)
	const { value: isDark } = useDarkMode(false)

	return (
		<div className={classnames(styles.dropdown, { [styles.dark]: isDark })}>
			<button className={classnames(styles.label, { [styles.dark]: isDark })} onClick={() => toggleIsOpen(!isOpen)}>
				{label}
				<SvgArrowDown />
			</button>
			{isOpen && (
				<div className={classnames(styles.menu, { [styles.dark]: isDark })}>
					{showApps && (
						<div>
							<a className={classnames(styles.featured, { [styles.dark]: isDark })} href="/">
								<SvgFavycon />
								<div>
									<span>Favycon</span>
									<span>Favicon generator tool</span>
								</div>
							</a>
							<a className={classnames(styles.featured, { [styles.dark]: isDark })} href="/">
								<SvgAppycon />
								<div>
									<span>Appycon</span>
									<span>Coming Soon</span>
								</div>
							</a>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export { Dropdown }
