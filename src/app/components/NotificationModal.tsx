"use client";
import { X } from "lucide-react";
import { useState } from "react";
import {
  Bell,
} from "lucide-react";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  type: string;
  unread: boolean;
};
type NotificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Alert Received",
      message: "You ahve received $3000",
      time: "2 minutes ago",
      type: "money",
      unread: true,
    },
    {
      id: 2,
      title: "Card Expiring",
      message: "Your card would soon expire",
      time: "1 hour ago",
      type: "card",
      unread: true,
    },
    {
      id: 3,
      title: " Approved",
      message: "Your money has been approved",
      time: "1 day ago",
      type: "money",
      unread: false,
    },
    {
      id: 4,
      title: "Upcoming card Reminder",
      message: "Virtual card needs to be renewed",
      time: "2 days ago",
      type: "reminder",
      unread: false,
    },
  ]);
if (!isOpen) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "money":
        return "bg-blue-100 text-blue-800";
      case "card":
        return "bg-green-100 text-green-800";
      case "analytics":
        return "bg-purple-100 text-purple-800";
      case "reminder":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
   <div className="fixed inset-0 z-50 bg-black/30 flex items-start justify-end">
      <div className="w-full max-w-md bg-white h-screen shadow-xl overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="max-h-full overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b hover:bg-gray-50 ${
                  notification.unread ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div
                    className={`p-2 rounded-lg ${getTypeColor(
                      notification.type
                    )}`}
                  >
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">{notification.title}</p>
                      {notification.unread && (
                        <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Bell className="h-10 w-10 mx-auto mb-2 text-gray-300" />
              No notifications
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;