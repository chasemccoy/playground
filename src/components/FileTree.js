import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: monospace;

  li {
    padding: 0;
    margin: 0;
  }

	> ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

  ul ul {
    list-style-type: none;
    border-left: 1px solid ${p => p.theme.colors.neutral[300]};
    padding-left: 16px;
    margin-left: 8px;
		margin-bottom: 0;
  }

	a:hover {
		text-decoration: none;
		color: ${p => p.theme.colors.blue[800]};
	}
`

const renderDirectory = directory => {
	return (
		<ul>
			{directory.map((item, i) => (
				<React.Fragment key={i}>
					{Array.isArray(item) ? renderDirectory(item) : renderItem(item)}
				</React.Fragment>
			))}
		</ul>
	)
}

const renderItem = item => {
	if (item instanceof Object) {
		return <li>File: {item.name}</li>
	}
	else {
		return <li>Folder: {item}</li>
	}
}

const FileTree = ({ data }) => {
	return (
		<Container>
			{renderDirectory(data)}
		</Container>
	)
}

export default FileTree
