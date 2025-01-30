import { Building, MapPin, Star, MessageCircle, ChartBar, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">CustomerBridge</div>
          <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
            お問い合わせ
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            MEOと口コミを活かして、<br />お客様とのつながりを深める
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            店舗オーナー様の集客をトータルサポート
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto animate-fade-in">
            無料相談を予約する
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">CustomerBridgeの特長・メリット</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">MEOで検索上位表示をサポート</h3>
              <p className="text-gray-600">指定キーワード × 地域の順位を自動記録。上位店舗との比較データで改善施策を導きます。</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <ChartBar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">来店・問い合わせ行動を可視化</h3>
              <p className="text-gray-600">Google Business Profileと連携し、検索後の行動を追跡。流入経路も把握できます。</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">口コミ管理で評価アップ</h3>
              <p className="text-gray-600">AIが返信文のドラフトを提案。簡単・迅速に口コミ対応ができます。</p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">複数店舗をまとめて管理</h3>
              <p className="text-gray-600">一つのアカウントで複数店舗の管理を一元化。運営ノウハウの共有もスムーズです。</p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">リーズナブルな価格</h3>
              <p className="text-gray-600">相場より費用を抑えた価格で導入可能。継続的なサポートと成果測定をセットで提供。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">一緒に、一歩先の集客を目指しませんか？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            MEOと口コミの力で、お客様とのつながりを深め、店舗の未来を切り拓きましょう。
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto">
            無料相談を予約する
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;