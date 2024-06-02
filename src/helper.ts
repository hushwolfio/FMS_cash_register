
	// prevent minus sign from being used manually in the input
	export const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		// Check if the pressed key is the '-' symbol
		if (event.key === "-" || event.keyCode === 189) {
			event.preventDefault(); // Prevent the default action
		}
	};