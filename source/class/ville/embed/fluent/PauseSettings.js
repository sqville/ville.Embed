/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PauseSettings",
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

   var pathdregular = "M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-13C8 2.67 7.33 2 6.5 2h-2Zm0 1h2c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5Zm9-1c-.83 0-1.5.67-1.5 1.5v6.1c.32-.16.65-.3 1-.4V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v5.7c.35.1.68.24 1 .4V3.5c0-.83-.67-1.5-1.5-1.5h-2Zm-1.43 9.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   var pathdfilled = "M12 3.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v6.1a5.48 5.48 0 0 0-5 0V3.5Zm-9 0C3 2.67 3.67 2 4.5 2h2C7.33 2 8 2.67 8 3.5v13c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 16.5v-13Zm9.07 7.94a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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