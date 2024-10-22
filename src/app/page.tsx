"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://100haryt.com",
			title: "Project",
			description: "I'm backend developer",
		},
		{
			href: "https://216.250.12.213",
			title: "Bazarexpress",
			description: "It's my project",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Typography",
			description: "Scale text automatically.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Kerem <span className="brand-on-background-medium">Charyyev</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Backend developer with 2 years of experience.
									</LetterFx>
								</span>
							</Heading>
							<Button
								href="https://github.com/charyyef"
								suffixIcon="chevronRight"
								variant="secondary">
								Github
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Flex fillWidth paddingY="8" gap="8" direction="column">
							{/* Existing Link component */}
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}
							>
								<Flex fillWidth paddingY="8" gap="8" direction="column">
									<Flex fillWidth gap="12" alignItems="center">
										<Text variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						
						</Flex>						

						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Charyyev, MIT License
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/charyyef"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://instagram.com/keremcharyyev"
						prefixIcon="instagram" size="s" variant="tertiary">
						Instagram
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
