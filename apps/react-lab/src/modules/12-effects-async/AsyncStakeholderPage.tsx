import { useEffect, useState } from "react";
import { type Status, type Stakeholder } from "./types";

export default function AsyncStakeholderPage() {
    const [data, setData] = useState<Stakeholder[]>([]);
    const [status, setStatus] = useState<Status>("idle");
    const [url, setUrl] = useState<string>("/stakeholders.json");
    const [error, setError] = useState<string | null>(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        const load = async (url: string) => {
            try {
                setStatus("loading");
                const response = await fetch(url, {
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const result = await response.json();
                setStatus("success");
                setData(result);
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error.name === "AbortError"
                ) {
                    return;
                }

                setStatus("error");
                setError(
                    error instanceof Error
                        ? error.message
                        : "Something went wrong"
                );
            }
        }
        load(url);
        return () => {
            controller.abort();
        };

    }, [url]);

    const handleRetry = () => {
        setReloadKey(prev => prev ++);
    }
    return (
        <>
            <h2>Status: {status}</h2>

            {status === "loading" && (
                <p>Loading...</p>
            )}

            {status === "error" && (
                <>
                    <p>{error}</p>
                    <button onClick={handleRetry}>Retry</button>
                </>
            )}

            {status === "success" && (
                data.length === 0 ? (
                    <h2>No stakeholders found</h2>
                ) : (
                    <>
                        <p>Stakeholders: {data.length}</p>
                        {data.map((stakeholder: Stakeholder) => (
                            <div key={stakeholder.id}>
                                <h3>{stakeholder.name}</h3>
                                <p>{stakeholder.role}</p>
                                <p>{stakeholder.organization}</p>
                            </div>
                        ))}
                    </>
                ))}

            <div>
                <button onClick={() => setUrl("/stakeholders.json")}>Load Data</button>
                <button onClick={() => setUrl("/empty.json")}>Load Empty</button>
                <button onClick={() => setUrl("/stakeholders_error.json")}>Load Error</button>
            </div>
        </>
    )
}