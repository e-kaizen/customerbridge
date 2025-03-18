
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";

const PrivacyPolicy = () => {
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
              プライバシーポリシー
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="text-gray-600 mb-6">
              株式会社カイゼンテック（以下「当社」といいます）は、当社が提供するサービス「CustomerBridge」（以下「本サービス」といいます）における、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. 個人情報の定義</h2>
            <p className="text-gray-600 mb-6">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. 個人情報の収集方法</h2>
            <p className="text-gray-600 mb-6">
              当社は、お客様が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、お客様の企業での利用状況など、お客様の属性情報や、お客様の取引に関する情報を、お客様の同意を得たうえで収集することがあります。
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. 個人情報を収集・利用する目的</h2>
            <p className="text-gray-600 mb-2">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
              <li>当社サービスの提供・運営のため</li>
              <li>お客様からのお問い合わせに回答するため</li>
              <li>お客様が利用中のサービスの新機能、更新情報、キャンペーン等をご案内するため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したお客様や、不正・不当な目的でサービスを利用しようとするお客様の特定をし、ご利用をお断りするため</li>
              <li>お客様にご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
              <li>有料サービスにおいて、お客様に利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. 個人情報の第三者提供</h2>
            <p className="text-gray-600 mb-6">
              当社は、次に掲げる場合を除いて、お客様の事前の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき
                <ol className="list-disc list-inside ml-6 mt-2">
                  <li>利用目的に第三者への提供を含むこと</li>
                  <li>第三者に提供されるデータの項目</li>
                  <li>第三者への提供の手段または方法</li>
                  <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                  <li>本人の求めを受け付ける方法</li>
                </ol>
              </li>
            </ol>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. 個人情報の開示</h2>
            <p className="text-gray-600 mb-6">
              当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
              <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
              <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
              <li>その他法令に違反することとなる場合</li>
            </ol>
            <p className="text-gray-600 mb-6">
              前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. 個人情報の訂正および削除</h2>
            <p className="text-gray-600 mb-6">
              お客様は、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下「訂正等」といいます）を請求することができます。当社は、お客様から前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
            </p>
            <p className="text-gray-600 mb-6">
              当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをお客様に通知します。
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. プライバシーポリシーの変更</h2>
            <p className="text-gray-600 mb-6">
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、お客様に通知することなく、変更することができるものとします。
            </p>
            <p className="text-gray-600 mb-6">
              当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>

            <div className="text-right mt-8 text-gray-600">
              2024年10月1日 制定
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

export default PrivacyPolicy;
