import Header from './Header';
import Sidebar from './Sidebar';
import SummaryCards from './SummaryCards';
import RecentActivity from './RecentActivity';
import Footer from './Footer';

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="dashboard">
        <Sidebar />

        <section className="dashboard-content">
          <SummaryCards />
          <RecentActivity />
        </section>
      </main>

      <Footer />
    </>
  )
}