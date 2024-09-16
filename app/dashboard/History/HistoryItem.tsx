"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import moment from 'moment';

interface HistoryItemProps {
  templateName: string;
  templateIcon: string;
  aiResponse: string | null;
  createdAt: string | null;
  wordCount: number;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  templateName,
  templateIcon,
  aiResponse,
  createdAt,
  wordCount
}) => {
  const [copyStatus, setCopyStatus] = useState<'Copy' | 'Copied!'>('Copy');

  const truncateText = (text: string, lines: number) => {
    const lineHeight = 15; // Assuming 20px line height
    const maxHeight = lines * lineHeight;
    return (
      <div style={{ 
        maxHeight: `${maxHeight}px`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
      }}>
        {text}
      </div>
    );
  };

  const handleCopy = async () => {
    if (aiResponse) {
      try {
        await navigator.clipboard.writeText(aiResponse);
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If date is invalid, try parsing it as DD/MM/YYYY
      const [day, month, year] = dateString.split('/');
      return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    }
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <tr>
      <td className="border px-4 py-2">
        <Image src={templateIcon} alt={templateName} width={50} height={50} />
        <span>{templateName}</span>
      </td>
      <td className="border px-4 py-2">{aiResponse ? truncateText(aiResponse, 3) : ""}</td>
      <td className="border px-4 py-2">
      {formatDate(createdAt)}
      </td>
      <td className="border px-4 py-2">{wordCount}</td>
      <td className="border px-4 py-2">
        <Button onClick={handleCopy}>
          {copyStatus}
        </Button>
      </td>
    </tr>
  );
};

export default HistoryItem;