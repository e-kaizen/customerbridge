import { Building, MapPin, Star, MessageCircle, ChartBar, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            CustomerBridge
          </div>
          <Button variant="default" className="bg-orange-500 hover:bg-orange-600 shadow-md">
            お問い合わせ
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/49e2f3b8-e0d7-4573-be9c-3451a2fe1be3.png" 
            alt="Restaurant review on mobile phone" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight tracking-tight">
            MEOとクチコミを活かして、<br />
            お客様との繋がりを深める<br />
            お手伝いをいたします
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in">
            店舗オーナー様の集客をトータルサポート
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto animate-fade-in shadow-lg transform hover:scale-105 transition-all duration-200">
            無料相談を予約する
          </Button>
        </div>
      </section>

      {/* MEO Explanation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                MEO(Map Engine Optimization)とは?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                GoogleMapsや検索結果で、お店が見つかりやすくなるように最適化することです。
                似た言葉にSEO(Search Engine Optimization)があります。SEOはGoogleやYahooといった検索エンジンの検索結果を最適化することです。
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">重要性</h3>
                <p className="text-gray-600 leading-relaxed">
                  「地名 + キーワード」検索で上位表示されると、人の目に触れる回数が増え、新規顧客が増加します。
                  クチコミ管理や写真・メニューで、お客様に信頼感を与えられます。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/49e2f3b8-e0d7-4573-be9c-3451a2fe1be3.png"
                  alt="Restaurant review demonstration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <MapPin className="w-16 h-16 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            CustomerBridgeの特長・メリット
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <MapPin className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">指定キーワードでの検索順位を上げるお手伝い</h3>
              <p className="text-gray-600">指定キーワード × 地域の順位を自動記録。上位店舗との比較データで改善施策を導きます。</p>
            </div>

            <div className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <ChartBar className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">来店・問い合わせ行動を可視化</h3>
              <p className="text-gray-600">Google Business Profileと連携し、検索後の行動を追跡。流入経路も把握できます。</p>
            </div>

            <div className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <MessageCircle className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">クチコミ管理で評価アップ</h3>
              <p className="text-gray-600">AIが返信文のドラフトを提案。簡単・迅速にクチコミ対応ができます。</p>
            </div>

            <div className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <Building className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">複数店舗をまとめて管理</h3>
              <p className="text-gray-600">一つのアカウントで複数店舗の管理を一元化。運営ノウハウの共有もスムーズです。</p>
            </div>

            <div className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <Star className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">リーズナブルな価格</h3>
              <p className="text-gray-600">相場より費用を抑えた価格で導入可能。継続的なサポートと成果測定をセットで提供。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">一緒に、一歩先の集客を目指しませんか？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            MEOとクチコミの力で、お客様とのつながりを深め、店舗の未来を切り拓きましょう。
          </p>
          <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto shadow-lg transform hover:scale-105 transition-all duration-200">
            無料相談を予約する
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
