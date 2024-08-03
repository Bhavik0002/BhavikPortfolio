export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-black dark:border-white font-medium text-lg md:text-lg lg:md:text-lg sm:text-base">
            <div className="w-full h-full bg-light dark:bg-gray-800 p-6 lg:p-4 md:p-4 sm:p-2 sm:text-xs sm:flex-col flex items-center justify-between">
                <span className="dark:text-white">2024 © All Rights Reserved.</span>
                <div>
                    <span className="dark:text-white">Created by&nbsp;
                        <span className="underline underline-offset-2">Bhavik Ahir</span>
                    </span>
                </div>
            </div>
        </footer>
    );
}
