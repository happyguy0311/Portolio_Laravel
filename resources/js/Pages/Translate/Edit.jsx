// Import Core Libraries
import { Head } from "@inertiajs/inertia-react";

// Import Layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// Import Custom Components
import EditForm from "@/Components/Translate/EditForm";

export default function TranslateEdit(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Translate" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <EditForm
                                translate={props.translate}
                                errors={props.errors}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
