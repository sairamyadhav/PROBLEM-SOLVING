geeksForGeeks link - https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1
  
  class Solution {
    // Function to detect cycle in an undirected graph.
    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {
        // Code here
        boolean[] visited  =new boolean[V];
        for(int i =0; i < V ;i++){
            if(visited[i] == false){
                boolean ans = BFS(adj, visited, i);
                if(ans)
                    return true;
            }
        }
        return false;
    }
    
    public boolean BFS(ArrayList<ArrayList<Integer>> adj, boolean[] visited , int src){
        ArrayDeque<Integer> queue = new ArrayDeque<>();
        queue.add(src);
        
        while(!queue.isEmpty()){
            int rem = queue.remove();
            
            if(visited[rem] == true)
                return true;
                
            visited[rem] = true;
            
            for(int nbr : adj.get(rem)){
                if(visited[nbr] == false){
                    queue.add(nbr);
                }
            }
        }
        return false;
    }
}
