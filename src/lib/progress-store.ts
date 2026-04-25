type ProgressData = {
    total: number;
    processed: number;
    status: "processing" | "done" | "error";
}

const progressStore = new Map<string, ProgressData>();

export const setProgress = (projectId: string, data: ProgressData) => {
    progressStore.set(projectId, data);
}

export const updateProgress = (projectId: string, processed: number) => {
    const current = progressStore.get(projectId);
    if (current) {
        progressStore.set(projectId, { ...current, processed });
    }
}

export const getProgress = (projectId: string) => {
    return progressStore.get(projectId) ?? null;
}

export const clearProgress = (projectId: string) => {
    progressStore.delete(projectId);
}