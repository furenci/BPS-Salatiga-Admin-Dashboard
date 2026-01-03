import React from 'react';
import { Badge } from './ui/Badge';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
interface Letter {
  id: string;
  number: string;
  date: string;
  subject: string;
  status: 'Draft' | 'Pending' | 'Approved' | 'Rejected';
}
interface LetterTableProps {
  data: Letter[];
}
export function LetterTable({
  data
}: LetterTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Draft':
        return <Badge variant="default">Draft</Badge>;
      case 'Pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'Approved':
        return <Badge variant="success">Approved</Badge>;
      case 'Rejected':
        return <Badge variant="danger">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  return <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 font-medium">No. Surat</th>
            <th className="px-6 py-4 font-medium">Tanggal</th>
            <th className="px-6 py-4 font-medium">Perihal</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map(item => <tr key={item.id} className="bg-white hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                {item.number}
              </td>
              <td className="px-6 py-4 text-gray-600">{item.date}</td>
              <td className="px-6 py-4 text-gray-900 max-w-xs truncate">
                {item.subject}
              </td>
              <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-gray-500 hover:text-[#00509E] hover:bg-blue-50 rounded transition-colors" title="View">
                    <Eye className="w-4 h-4" />
                  </button>
                  {item.status === 'Draft' && <>
                      <button className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>}
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}