export default function Footer() {
    return (
        <footer className="bg-background border-t border-primary/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">D</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight">
                            Darshan<span className="text-primary">.dev</span>
                        </span>
                    </div>

                    <p className="text-muted-foreground text-sm text-center md:text-right">
                        Built with <span className="text-lime-500"> by Darshan.dev</span>
                        <br />
                        <span className="text-xs opacity-50">© {new Date().getFullYear()} All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
