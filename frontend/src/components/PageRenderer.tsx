import React, { useEffect, useState } from 'react';
import { SectionRenderer } from './SectionRenderer';

const API_URL = import.meta.env.VITE_API_URL || '/api';

interface PageData {
  page_id: string;
  page_name: string;
  route: string;
  sections: any[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  is_published: boolean;
}

interface PageRendererProps {
  pageId: string;
  isPreview?: boolean;
}

export function PageRenderer({ pageId, isPreview = false }: PageRendererProps) {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPageData();
  }, [pageId]);

  const loadPageData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try public endpoint first, then with token if preview
      let response;
      
      try {
        // First try without token (for public access)
        response = await fetch(`${API_URL}/pages/${pageId}`);
        
        if (!response.ok && isPreview) {
          // If failed and in preview, try with token
          const token = localStorage.getItem('admin_token');
          if (token) {
            response = await fetch(`${API_URL}/page-builder/${pageId}?token=${token}`);
          }
        }
      } catch (err) {
        throw new Error('Failed to load page');
      }
      
      if (!response || !response.ok) {
        throw new Error('Page not found');
      }

      const data = await response.json();
      
      // Ensure sections field exists
      if (!data.sections) {
        data.sections = [];
      }
      
      // Check if page is published (unless in preview mode)
      if (!isPreview && !data.is_published) {
        throw new Error('Page not found');
      }

      setPageData(data);
      
      // Update document meta tags
      if (data.meta) {
        if (data.meta.title) {
          document.title = data.meta.title;
        }
        if (data.meta.description) {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute('content', data.meta.description);
          }
        }
      }
    } catch (err) {
      console.error('Error loading page:', err);
      setError(err instanceof Error ? err.message : 'Failed to load page');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading page...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (!pageData || !pageData.sections || pageData.sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="text-gray-400 text-5xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Empty Page</h2>
          <p className="text-gray-600">This page has no content yet.</p>
        </div>
      </div>
    );
  }

  // Sort sections by order
  const sortedSections = [...pageData.sections].sort((a, b) => a.order - b.order);

  return (
    <div className="page-renderer">
      {sortedSections.map((section) => (
        <SectionRenderer 
          key={section.id} 
          section={section}
          isPreview={isPreview}
        />
      ))}
    </div>
  );
}
