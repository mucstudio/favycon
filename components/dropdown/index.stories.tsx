import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Dropdown } from '.'

export default {
	title: 'Dropdown',
	decorators: [withKnobs],
}
export const drodpwonDesktop = () => {
	const label = 'More tools'
	const showApps = true

	return <Dropdown label={label} showApps={showApps} />
}

drodpwonDesktop.story = {
	name: 'Desktop',
}
