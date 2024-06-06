/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EyeTracking",
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

   var pathdregular = "M3 4.5C3 3.67 3.67 3 4.5 3h3a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 0 2 4.5v3a.5.5 0 0 0 1 0v-3Zm0 11c0 .83.67 1.5 1.5 1.5h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 2 15.5v-3a.5.5 0 0 1 1 0v3ZM15.5 3c.83 0 1.5.67 1.5 1.5v3a.5.5 0 0 0 1 0v-3A2.5 2.5 0 0 0 15.5 2h-3a.5.5 0 0 0 0 1h3ZM17 15.5c0 .83-.67 1.5-1.5 1.5h-3a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 0 2.5-2.5v-3a.5.5 0 0 0-1 0v3Zm-10-4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-5.05.22a.5.5 0 0 1-.9-.44l.45.22-.45-.22v-.01l.01-.01a2.1 2.1 0 0 1 .08-.14l.25-.38A6.85 6.85 0 0 1 10 6a6.85 6.85 0 0 1 5.62 2.74 5.13 5.13 0 0 1 .33.52v.01l-.44.23.45-.22a.5.5 0 0 1-.9.45V9.7a2.5 2.5 0 0 0-.25-.39A5.86 5.86 0 0 0 10 7a5.86 5.86 0 0 0-4.8 2.32 4.14 4.14 0 0 0-.24.39l-.01.01Z";
   var pathdfilled = "M4.5 3C3.67 3 3 3.67 3 4.5v3a.5.5 0 0 1-1 0v-3A2.5 2.5 0 0 1 4.5 2h3a.5.5 0 0 1 0 1h-3Zm0 14A1.5 1.5 0 0 1 3 15.5v-3a.5.5 0 0 0-1 0v3A2.5 2.5 0 0 0 4.5 18h3a.5.5 0 0 0 0-1h-3ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-3a.5.5 0 0 1 0-1h3A2.5 2.5 0 0 1 18 4.5v3a.5.5 0 0 1-1 0v-3ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-3a.5.5 0 0 1 1 0v3a2.5 2.5 0 0 1-2.5 2.5h-3a.5.5 0 0 1 0-1h3ZM7 11.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM4.95 9.72a.5.5 0 0 1-.9-.44l.45.22-.45-.22v-.01l.01-.01a2.1 2.1 0 0 1 .08-.14l.25-.38A6.85 6.85 0 0 1 10 6a6.85 6.85 0 0 1 5.62 2.74 5.13 5.13 0 0 1 .33.52v.01l-.44.23.45-.22a.5.5 0 0 1-.9.45V9.7a2.5 2.5 0 0 0-.25-.39A5.86 5.86 0 0 0 10 7a5.86 5.86 0 0 0-4.8 2.32 4.14 4.14 0 0 0-.24.39l-.01.01Z";
   
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