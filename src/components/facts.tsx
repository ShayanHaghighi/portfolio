export default function Facts() {
    return <aside className="rounded-2xl bg-gray-900 p-6 border border-gray-800 w-fit">
        <h3 className="font-semibold">Quick facts</h3>
        <dl className="mt-3 text-sm text-gray-300 space-y-2">
            <div>
                <dt className="text-gray-400">Location</dt>
                <dd>United Kingdom</dd>
            </div>
            <div>
                <dt className="text-gray-400">Role</dt>
                <dd>Private Tutor • Software Engineer</dd>
            </div>
            <div>
                <dt className="text-gray-400">Looking for</dt>
                <dd>Contract or full-time roles; interesting projects</dd>
            </div>
        </dl>
    </aside>
}