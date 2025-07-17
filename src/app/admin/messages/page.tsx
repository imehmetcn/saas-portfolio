"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  MailOpen, 
  Trash2, 
  Reply, 
  Search,
  Calendar,
  User
} from "lucide-react";

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  status: 'new' | 'read' | 'replied' | 'archived';
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const savedMessages = localStorage.getItem("contactMessages");
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Mesajlar yüklenirken hata:", error);
      }
    }
  }, []);

  const updateMessage = (id: number, updates: Partial<Message>) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, ...updates } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({ ...selectedMessage, ...updates });
    }
  };

  const deleteMessage = (id: number) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  const markAsRead = (message: Message) => {
    if (!message.read) {
      updateMessage(message.id, { read: true, status: 'read' });
    }
    setSelectedMessage(message);
  };

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || message.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const unreadCount = messages.filter(msg => !msg.read).length;

  const statusOptions = [
    { value: 'all', label: 'Tümü' },
    { value: 'new', label: 'Yeni' },
    { value: 'read', label: 'Okundu' },
    { value: 'replied', label: 'Yanıtlandı' },
    { value: 'archived', label: 'Arşivlendi' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'read': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'replied': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'archived': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return 'Yeni';
      case 'read': return 'Okundu';
      case 'replied': return 'Yanıtlandı';
      case 'archived': return 'Arşivlendi';
      default: return 'Bilinmiyor';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Mesajlar
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {unreadCount > 0 && (
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {unreadCount} okunmamış mesaj
            </span>
          )}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            {/* Search and Filter */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Mesajlarda ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Messages List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredMessages.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => markAsRead(message)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        selectedMessage?.id === message.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {message.read ? (
                            <MailOpen className="text-gray-400" size={16} />
                          ) : (
                            <Mail className="text-blue-600 dark:text-blue-400" size={16} />
                          )}
                          <h3 className={`font-medium ${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                            {message.name}
                          </h3>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                          {getStatusLabel(message.status)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {message.email}
                      </p>
                      
                      <p className={`text-sm mb-2 ${!message.read ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                        {message.subject || 'Konu belirtilmemiş'}
                      </p>
                      
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {message.message}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <Calendar size={12} />
                        {message.date}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Mail className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">
                    {searchTerm || filterStatus !== 'all' ? 'Arama kriterlerine uygun mesaj bulunamadı' : 'Henüz mesaj bulunmuyor'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {/* Message Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedMessage.subject || 'Konu belirtilmemiş'}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {selectedMessage.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        {selectedMessage.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {selectedMessage.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedMessage.status)}`}>
                      {getStatusLabel(selectedMessage.status)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}&body=Merhaba ${selectedMessage.name},%0D%0A%0D%0A`}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => updateMessage(selectedMessage.id, { status: 'replied' })}
                  >
                    <Reply size={16} />
                    Yanıtla
                  </a>
                  
                  <select
                    value={selectedMessage.status}
                    onChange={(e) => updateMessage(selectedMessage.id, { status: e.target.value as Message['status'] })}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="new">Yeni</option>
                    <option value="read">Okundu</option>
                    <option value="replied">Yanıtlandı</option>
                    <option value="archived">Arşivlendi</option>
                  </select>
                  
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                    Sil
                  </button>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
              <Mail className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Mesaj Seçin
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Detaylarını görüntülemek için sol taraftan bir mesaj seçin
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}