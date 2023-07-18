export default function Root({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient-to-r from-cyan-100 to-teal-200">
            {children}
        </div>
    )
}
