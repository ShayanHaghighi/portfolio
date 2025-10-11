import {useParams} from "react-router";
import projects from "../../data/projects.json";
import {useEffect, useState} from "react";
import type {Project} from "../../types/project.ts";

export default function ProjectFull() {
    const params = useParams();
    const [content, setContent] = useState<Project>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const res = projects.filter(project => project.id === params.projectId)
        if (res.length === 0) {
            console.log("no projects found")
        }
        setContent(res[0])
        console.log(JSON.stringify(res[0], null, 2))
        setLoading(false)
    }, [params])

    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Under construction</h1>
                <img src="/UnderCon.svg" alt="projects"/>
            </div>
            {loading && <span>Loading...</span>}
            {!loading && content &&
                <div>
                    <dl>
                        <dt className="text-lg font-bold">Id</dt>
                        <dd>{content.id}</dd>
                        <dt className="text-lg font-bold">Title</dt>
                        <dd>{content.title}</dd>
                        <dt className="text-lg font-bold">Summary</dt>
                        <dd>{content.description}</dd>
                        <dt className="text-lg font-bold">Tags</dt>
                        <dd>{JSON.stringify(content.tags)}</dd>
                        <dt className="text-lg font-bold">Description</dt>
                        <dd>
                            <div dangerouslySetInnerHTML={{__html: content.content}}></div>
                        </dd>
                    </dl>
                </div>
            }
        </div>
    )
}