export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient-to-r from-pink-100 to-purple-200">
            {children}
        </div>
    )
}
