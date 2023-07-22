export default function Root({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient-to-r from-cyan-100 via-purple-50 to-teal-100">
            {children}
        </div>
    )
}
