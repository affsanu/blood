export default function ClerkLayout(
    { children }
        :
        {
            children: React.ReactNode
        }
) {
    return (
        <div className="h-[88vh] flex justify-center items-center">
            {children}
        </div>
    )
}