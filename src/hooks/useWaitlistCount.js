import { useEffect, useRef, useState } from "react";

const API_BASE = "https://api.primeinnovators.org/waitlist";

export function useWaitlistCount() {
	const [count, setCount] = useState(null);
	const fetched = useRef(false);

	useEffect(() => {
		if (fetched.current) return;
		fetched.current = true;

		fetch(`${API_BASE}/count`)
			.then((r) => r.json())
			.then((data) => {
				if (typeof data.count === "number") setCount(data.count);
			})
			.catch(() => {});
	}, []);

	return count;
}

export const WAITLIST_API = API_BASE;
