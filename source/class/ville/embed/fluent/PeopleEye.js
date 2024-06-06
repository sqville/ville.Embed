/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleEye",
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

   var pathdregular = "M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm8.1 5.04A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2V12.08a1.72 1.72 0 0 0 .01.18 3.95 3.95 0 0 0 .67 1.8C2.88 15.09 4.24 16 6.75 16c1 0 1.82-.15 2.49-.39a3.09 3.09 0 0 1-.24-.98c-.56.22-1.3.37-2.25.37-2.24 0-3.26-.8-3.74-1.5a2.95 2.95 0 0 1-.5-1.42l-.01-.02V12a1 1 0 0 1 1-1H10a1 1 0 0 1 .77.36c.25-.2.52-.4.82-.57ZM14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5 4.5c-2.76 0-4.5 2.32-4.5 3.5 0 1.2 1.74 3.5 4.5 3.5s4.5-2.32 4.5-3.5c0-1.2-1.74-3.5-4.5-3.5Zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z";
   var pathdfilled = "M10 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-11 1a2 2 0 0 0-2 2s0 4 5.25 4c1.01 0 1.83-.15 2.49-.39A2.98 2.98 0 0 1 9 14.5c0-.52.18-1.05.43-1.52a5.53 5.53 0 0 1 2.16-2.2A2 2 0 0 0 10 10H3.5Zm11 1c-2.76 0-4.5 2.32-4.5 3.5 0 1.2 1.74 3.5 4.5 3.5s4.5-2.32 4.5-3.5c0-1.2-1.74-3.5-4.5-3.5Zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z";
   
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