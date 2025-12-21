import Link from "next/link";

export default function FundraisingPage() {
    return (
        <div>
            <h1>Fundraising Page</h1>
            <p>Welcome to our fundraising efforts! Your support makes a difference.</p>
            <Link href="https://www.justgiving.com/fundraising/uk-everest-base-camp-2nd-september-2026-student-choseachallenge-68f6081c57fff?utm_medium=FA&utm_source=CL&utm_content=link_in_bio" target="_blank" rel="noopener noreferrer">
                Donate Here
            </Link>
        </div>
    );
}
