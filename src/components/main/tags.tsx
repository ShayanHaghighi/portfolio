export default function Tags({ tags }: { tags: string[] }) {

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) =>
                <span key={tag}
                    className="text-xs cursor-default px-2 py-1 rounded-full text-tags-text bg-tags-bg border border-tags-border hover:border-tags-hover-border">
                    {tag}
                </span>
            )}
        </div>
    )
}
