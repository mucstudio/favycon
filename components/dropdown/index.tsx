import React, { useState } from 'react'
import classnames from 'classnames'
import { SvgArrowDown } from 'components/svgs/svg-arrow-down'
import { SvgFavycon } from 'components/svgs/svg-favycon'

import styles from './index.module.scss'

type DropdownProps = {
	label: string
	labelLink: string
}

const Dropdown = ({ label, labelLink }: DropdownProps) => {
	const [isOpen, toggleIsOpen] = useState(false)

	return (
		<div className={classnames(styles.dropdown, { [styles.open]: isOpen })}>
			<div className={classnames(styles.menu, { [styles.open]: isOpen })} onClick={() => toggleIsOpen(!isOpen)}>
				<SvgFavycon className={classnames(styles.logo)} />
				{!isOpen && <SvgArrowDown />}
				{isOpen && (
					<div className={classnames(styles.dropdownInfo)}>
						<span className={classnames(styles.title)}>Favycon</span>
						<span className={classnames(styles.subtitle)}>Favicon generator tool</span>
					</div>
				)}
			</div>
			{isOpen && (
				<div className={classnames(styles.label)}>
					<a className={classnames(styles.labelLink)} target="_blanK" rel="noopener noreferrer" href={labelLink}>
						{label}
					</a>
				</div>
			)}
		</div>
	)
}

export { Dropdown }
