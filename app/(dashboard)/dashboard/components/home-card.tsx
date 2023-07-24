import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HomeCardProps {
    label: string;
    content: string;
    desc: string;
    logo: React.ReactElement<SVGElement>;
}

const HomeCard = ({ label, logo, desc, content }: HomeCardProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {label}
                </CardTitle>
                {logo}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{content}</div>
                <p className="text-xs text-muted-foreground">
                   {desc}
                </p>
            </CardContent>
        </Card>
    )
}

export default HomeCard