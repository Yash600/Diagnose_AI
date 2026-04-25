import { api } from "@/trpc/react"
import {useLocalStorage} from 'usehooks-ts'

const useProject = () => {
    const {data: projects} = api.project.getProjects.useQuery()
    const [projectId, setProjectId] = useLocalStorage<string | null>("projectId", null)
    const project = projects?.find(p => p.id === projectId) || null
    return {
        projects, 
        project,
        projectId,
        setProjectId
    }
}

export default useProject
