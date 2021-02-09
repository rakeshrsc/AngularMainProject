
export interface ProjectData {
    title: string;
    startDate: Date;
    endDate: Date;
    epics: Array<Epic>;
}

export interface Epic {
    name: string;
    priority: number;
}
