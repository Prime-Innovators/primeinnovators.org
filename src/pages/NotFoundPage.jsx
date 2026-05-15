import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<div className="flex items-center justify-center min-h-[60vh]">
			<div className="text-center space-y-4">
				<p className="text-6xl font-bold text-primary-fixed">404</p>
				<h1 className="text-2xl font-bold text-on-surface">Page not found</h1>
				<Link
					to="/"
					className="btn-primary inline-flex items-center gap-2"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}