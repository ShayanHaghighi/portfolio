export default function Tags({tags}: { tags: string[] }) {

    return (
        <div className="flex flex-wrap gap-2 mt-4 ">
            {tags.map((tag) =>
                <span key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-gray-800 border border-gray-700">
                      {tag}
                    </span>
            )}
        </div>
    )
}