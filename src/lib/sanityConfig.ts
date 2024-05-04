import { structureTool } from 'sanity/structure';
 
export default {
    plugins: [structureTool()],
    name: 'SageSkinAesthetics',
    projectId: 'b8i6brxt', 
    dataset: 'production',
    schema: {
        types: [
            {
                type: 'document',
                name: 'announcement',
                title: 'Announcement',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        title: 'Title'
                    },
                    {
                        type: 'text',
                        name: 'message',
                        title: 'Message'
                    }
                ]
            }
        ]
    },
    basePath: '/studio'
};
