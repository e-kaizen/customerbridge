
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, FileText, ExternalLink } from "lucide-react";

const TermsOfService = () => {
  const termsDocumentUrl = "https://drive.google.com/file/d/1WIo5cEaHEvHqeHT2CgdLHDjaGR1ysJBh/view?usp=sharing";
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            CustomerBridge
          </Link>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Home size={16} />
              ホームに戻る
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              利用規約
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-16">
            <div className="flex flex-col items-center justify-center space-y-6">
              <FileText className="h-24 w-24 text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">利用規約はPDFファイルでご提供しています</h2>
              <p className="text-gray-600 max-w-lg">
                利用規約の内容を確認するには、以下のボタンをクリックしてPDFをご覧ください。
              </p>
              <div className="mt-8">
                <a href={termsDocumentUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
                    <FileText size={16} />
                    利用規約を表示する
                    <ExternalLink size={16} />
                  </Button>
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-8">
                規約に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
              ホームに戻る
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 株式会社カイゼンテック All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
