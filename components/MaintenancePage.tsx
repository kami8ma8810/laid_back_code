import React from 'react';

/**
 * メンテナンス中に表示するページ
 * 環境変数 NEXT_PUBLIC_MAINTENANCE_MODE=true で有効化
 */
export const MaintenancePage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', padding: '20px', maxWidth: '500px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#333' }}>🔧 メンテナンス中</h1>
        <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
          サイトは現在メンテナンス中です。
          <br />
          <br />
          しばらくしてからアクセスしてください。
        </p>
      </div>
    </div>
  );
};
