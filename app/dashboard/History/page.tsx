// app/dashboard/History/page.tsx

import Templates from '@/(data)/templates';  
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import HistoryItem from './HistoryItem';  // Import the client component

export interface HISTORY {
  id: number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

const History = async () => {
  const user = await currentUser();

  if (!user) {
    return <div>No user logged in</div>;
  }

  const userEmail = user.primaryEmailAddress?.emailAddress;

  if (!userEmail) {
    return <div>Invalid user data</div>;
  }

  
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, userEmail)) 
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string) => {
    return Templates.find((item) => item.slug === slug);
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated history below.</p>

      {HistoryList.length === 0 ? (
        <p>No history available</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Template</th>
              <th className="border px-4 py-2">AI Response</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Words</th>
              <th className="border px-4 py-2">Copy</th>
            </tr>
          </thead>
          <tbody>
            {HistoryList.map((item) => {
              const template = GetTemplateName(item.templateSlug);
              
              
              return (
                <HistoryItem
                  key={item.id}
                  templateName={template?.name || "Unknown"}
                  templateIcon={template?.icon || ""}
                  aiResponse={item.aiResponse}
                  createdAt={item.createdAt}
                  wordCount={item.aiResponse ? item.aiResponse.split(" ").length : 0}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
