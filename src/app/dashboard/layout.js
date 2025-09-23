import Link from "next/link";

export default function DashboardLayout({children}){
  return(
    <div style={{display: 'flex', height:"100vh"}}>
      <aside style={{width:"200px", padding:"1rem", background:"white", color:"black"}}>
        <nav>
          <ul style={{listStyle:"none", padding:0}}>
            <li><Link href="/dashboard/profile">Profile</Link></li>
            <li><Link href="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{flex:1, padding:"2rem"}}>
        {children}
      </main>
    </div>
  )
}