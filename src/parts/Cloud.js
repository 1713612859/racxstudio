import React, { useEffect } from 'react';
import api from '../api/axios.js';

export default function HelpCould() {
  useEffect(() => {
    const product =   {
      id: 10001,
      name: "无线蓝牙耳机",
      sku: "BT-HEADSET-001",
      barcode: "6921234567890",
      price: "11111111xxx1",
      costPrice: 180.50,
      stockQuantity: 120,
      lowStockThreshold: 10,
      category: "Electronics",
      description: "高品质无线蓝牙耳机，支持降噪和长续航。",
      imageUrl: "https://example.com/images/bluetooth-headset.jpg",
      isActive: true,
      createdAt: "2025-08-25T10:30:00Z",
      updatedAt: "2025-08-25T10:30:00Z",
    };

    api.get('test/hello?123456465469789=44165', product).then((response) => {
      console.log(response);
    });
  });
    
  return (
        <div>
            <p className="text-orange-400 text-4xl font-medium ">
                This is Help Could Page !!!
            </p>
        </div>
  );
}
