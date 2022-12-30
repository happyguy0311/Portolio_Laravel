// Import Core Libraries
import { Head } from "@inertiajs/inertia-react";

// Import Components
import Paginator from "@/Components/Paginator";
import DataTable from "@/Components/Contact/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ContactIndex(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Contact" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch item-center gap-4 p-4">
                                <DataTable contact={props.contact.data} />
                            </div>
                            <div className="flex justify-end">
                                <Paginator meta={props.contact.meta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}