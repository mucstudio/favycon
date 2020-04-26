import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Dropdown } from '.'

export default {
	title: 'Dropdown',
	decorators: [withKnobs],
}
export const drodpwonDesktop = () => {
	const label = 'Have Feedback? Found a bug?'
	const labelLink = 'mailto:feedback@favycon.app'

	return <Dropdown label={label} labelLink={labelLink} />
}

drodpwonDesktop.story = {
	name: 'Desktop',
}
