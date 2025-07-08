/**
 * Greeting component to display a personalized greeting message.
 * @returns React.Node
 */
export const Greeting = () => {

    const currentHour = new Date().getHours();

    const getGreetingByHour = (hour: number): string => {
        if (hour < 12) {
            return 'Buenos días';
        } else if (hour < 18) {
            return 'Buenas tardes';
        } else {
            return 'Buenas Noches';
        }
    };

    const userFullName = 'Daniel Alexander Muelas';

    return (
        <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{`${getGreetingByHour(currentHour)}, ${userFullName.split(' ')[0]}`}</h2>
            <p className="text-gray-600 mb-5">Bienvenido al Dashboard de tus finanzas personales</p>
        </>
    );
}
