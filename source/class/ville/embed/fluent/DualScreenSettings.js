/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenSettings",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M12.07 2.44a2 2 0 0 1-1.44 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 8.65l-.13.43c.26.2.54.37.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.02l-.35-.08A2 2 0 0 1 17 2.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM14.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1Z";
   var pathdfilled = "M12.07 2.44a2 2 0 0 1-1.44 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 8.65l-.13.43c.26.2.54.37.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.02l-.35-.08A2 2 0 0 1 17 2.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM14.5 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4.5c1.33 0 2.55-.47 3.5-1.26V16a2 2 0 0 1-2 2h-5.5V9.27a5.48 5.48 0 0 0 4 1.73Zm-5-3.2A5.47 5.47 0 0 1 9.02 6H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5V7.8ZM6 15.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});