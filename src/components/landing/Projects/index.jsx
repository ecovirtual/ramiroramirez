import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import { Wrapper, Grid } from './styles'

// Project List
import ProjectList from './projects.json'

export const Projects = () => {
	// Github Data
	// const {
	// 	github: {
	// 		repositoryOwner: {
	// 			repositories: { edges },
	// 		},
	// 	},
	// } = useStaticQuery(graphql`
	// 	{
	// 		github {
	// 			repositoryOwner(login: "ecovirtual") {
	// 				repositories(
	// 					first: 6
	// 					orderBy: { field: STARGAZERS, direction: DESC }
	// 				) {
	// 					edges {
	// 						node {
	// 							id
	// 							name
	// 							url
	// 							description
	// 							stargazers {
	// 								totalCount`
	// 							}
	// 							forkCount
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)

	// const [expanded, setExpanded] = React.useState(false)
	// function handleExpandClick() {
	// 	setExpanded(!expanded)
	// }

	return (
		<Wrapper as={Container} id="projects">
			<h2>Previous Work</h2>
			<Grid>
				{ProjectList.map((project) => (
					<Card
						// as="a"
						// href={node.url}
						// target="_blank"
						// rel="noopener noreferrer"
						project={project}
					/>
				))}
			</Grid>
		</Wrapper>
	)
}
