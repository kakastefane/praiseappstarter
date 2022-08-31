import NextLink from "next/link";
import { Avatar, Dropdown, Navbar, Text, Link } from '@nextui-org/react';
import { useRouter } from "next/router";

const Header = () => {
	const { route } = useRouter();

	return (
    <Navbar isBordered variant="sticky">
			<Navbar.Toggle showIn="xs" />
			<Navbar.Brand
				css={{
					"@xs": {
						w: "12%",
					},
				}}
			>
				<Text b color="inherit">
					PRAISE+
				</Text>
			</Navbar.Brand>
			<Navbar.Content
				enableCursorHighlight
				activeColor="primary"
				hideIn="xs"
				variant="underline-rounded"
			>
				<NextLink href="/">
					<Navbar.Link isActive={route === "/" ?? "true"}>
						Escalas
					</Navbar.Link>
				</NextLink>
				<NextLink href="/repertory">
					<Navbar.Link  isActive={route === "/repertory" ?? "true"}>Repertório</Navbar.Link>
				</NextLink>
				<NextLink href="/ministry">
					<Navbar.Link  isActive={route === "/ministry" ?? "true"}>Ministério</Navbar.Link>
				</NextLink>
			</Navbar.Content>
			<Navbar.Content
				css={{
					"@xs": {
						w: "12%",
						jc: "flex-end",
					},
				}}
			>
				<Dropdown placement="bottom-right">
					<Navbar.Item>
						<Dropdown.Trigger>
							<Avatar
								bordered
								as="button"
								color="primary"
								size="md"
								src="https://i.pravatar.cc/150?u=2"
							/>
						</Dropdown.Trigger>
					</Navbar.Item>
					<Dropdown.Menu
						aria-label="User menu actions"
						color="primary"
						onAction={(actionKey) => console.log({ actionKey })}
					>
						<Dropdown.Item key="profile" css={{ height: "$18" }}>
							<Text b color="inherit" css={{ d: "flex" }}>
								Signed in as
							</Text>
							<Text b color="inherit" css={{ d: "flex" }}>
								zoey@example.com
							</Text>
						</Dropdown.Item>
						<Dropdown.Item key="settings" withDivider>
							My Settings
						</Dropdown.Item>
						<Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
						<Dropdown.Item key="analytics" withDivider>
							Analytics
						</Dropdown.Item>
						<Dropdown.Item key="system">System</Dropdown.Item>
						<Dropdown.Item key="configurations">Configurations</Dropdown.Item>
						<Dropdown.Item key="help_and_feedback" withDivider>
							Help & Feedback
						</Dropdown.Item>
						<Dropdown.Item key="logout" withDivider color="error">
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
			<Navbar.Collapse>
				<Navbar.CollapseItem isActive={route === "/" ?? "true"}>
					<NextLink href="/">
						<Link color="inherit">
							Escalas
						</Link>
					</NextLink>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem isActive={route === "/repertory" ?? "true"}>
					<NextLink href="/repertory">
						<Link color="inherit">
							Repertório
						</Link>
					</NextLink>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem isActive={route === "/ministry" ?? "true"}>
					<NextLink href="/ministry">
						<Link color="inherit">
							Ministério
						</Link>
					</NextLink>
				</Navbar.CollapseItem>
			</Navbar.Collapse>
		</Navbar>
  )
}

export default Header
