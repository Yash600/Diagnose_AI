import React from 'react'
import { useQueryClient } from '@tanstack/react-query'

const useReFetch = () => {
    const queryClient = useQueryClient()    
    return async() => {
        await queryClient.refetchQueries({
            type: 'active'
        })
    }

}

export default useReFetch