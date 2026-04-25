"use client"

import { Sidebar, SidebarMenu, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import useProject  from "@/hooks/use-project"

const items = [
    {title: "Dashboard", url: '/dashboard', icon: LayoutDashboard},
    {title: "Q&A", url: '/qa', icon: Bot},
    {title: "Meetings", url: '/meetings', icon: Presentation},
    {title: "Billing", url: '/billing', icon: CreditCard}
]


export function AppSidebar() {
    const pathname = usePathname()
    const { projects, projectId, setProjectId } = useProject() 
    return(
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Image src='/logo.png' alt='Logo' width={250} height={200}  />
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application 
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => {
                                return(
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url} className={cn({'!bg-primary !text-white' : pathname === item.url}, 'list-none')}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>    
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                        
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects?.map(project => (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton asChild>
                                        <div onClick={() => setProjectId(project.id)}>
                                            <div className={cn('rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary', {'bg-primary text-white': project.id === projectId})}>
                                                {project.name[0]}
                                            </div>
                                            <span>{project.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            <div className="h-2"></div>
                            <SidebarMenuItem>
                                <Link href={'/create'}>
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Plus />
                                        Create Project
                                    </Button>
                                </Link>
                            </SidebarMenuItem>   
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>

        
    )
}