
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";

const LegalBusinessInfo = () => {
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
              特定商取引法に基づく表記
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-3xl mx-auto">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <th className="py-4 pr-4 font-semibold text-gray-700 w-1/3">販売事業者</th>
                    <td className="py-4 text-gray-600">株式会社カイゼンテック</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 pr-4 font-semibold text-gray-700">運営統括責任者</th>
                    <td className="py-4 text-gray-600">畠山　寛之</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 pr-4 font-semibold text-gray-700">所在地</th>
                    <td className="py-4 text-gray-600">〒213-0001 神奈川県川崎市高津区溝口3-12-2</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 pr-4 font-semibold text-gray-700">電話番号</th>
                    <td className="py-4 text-gray-600">044-567-0464</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 pr-4 font-semibold text-gray-700">メールアドレス</th>
                    <td className="py-4 text-gray-600">web-inquiry_group@e-kaizen.tech</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 pr-4 font-semibold text-gray-700">販売URL</th>
                    <td className="py-4 text-gray-600">https://customerbridge.netlify.app/</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-4 font-semibold text-gray-700">お支払い方法</th>
                    <td className="py-4 text-gray-600">クレジットカード決済</td>
                  </tr>
                </tbody>
              </table>
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

export default LegalBusinessInfo;
