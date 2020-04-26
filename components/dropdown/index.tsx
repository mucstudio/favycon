import React, { useState } from 'react'
import classnames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { SvgArrowDown } from 'components/svgs/svg-arrow-down'
import { SvgFavycon } from 'components/svgs/svg-favycon'

import styles from './index.module.scss'

type DropdownProps = {
	label: string
	labelLink: string
}

const Dropdown = ({ label, labelLink }: DropdownProps) => {
	const [isOpen, toggleIsOpen] = useState(false)
	const { value: isDark } = useDarkMode(false)

	return (
		<div className={classnames(styles.dropdown, { [styles.dark]: isDark })}>
			<div className={classnames(styles.logo, { [styles.dark]: isDark })} onClick={() => toggleIsOpen(!isOpen)}>
				<SvgFavycon />
				{!isOpen && <SvgArrowDown />}
				{isOpen && (
					<div className={classnames(styles.dropdownInfo, { [styles.dark]: isDark })}>
						<span className={classnames(styles.title, { [styles.dark]: isDark })}>Favycon</span>
						<span className={classnames(styles.subtitle, { [styles.dark]: isDark })}>Favicon generator tool</span>
					</div>
				)}
			</div>
			{isOpen && (
				<div className={classnames(styles.label, { [styles.dark]: isDark })}>
					<a
						className={classnames(styles.labelLink, { [styles.dark]: isDark })}
						target="_blanK"
						rel="noopener noreferrer"
						href={labelLink}>
						{label}
					</a>
				</div>
			)}
		</div>
	)
}

export { Dropdown }
