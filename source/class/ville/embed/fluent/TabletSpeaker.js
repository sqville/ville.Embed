/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabletSpeaker",
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

   var pathdregular = "M18.1 3.07a3.67 3.67 0 0 0-.45-.87.5.5 0 0 0-.8.6l.07.1a5.9 5.9 0 0 1 .58 2.6 5.9 5.9 0 0 1-.58 2.6l-.12.18a.5.5 0 0 0 .85.52c.12-.16.29-.45.44-.87.26-.68.41-1.5.41-2.43 0-.94-.15-1.75-.4-2.43ZM14 2.5a.5.5 0 0 0-.85-.35L11.29 4h-.79a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h.8l1.85 1.85A.5.5 0 0 0 14 8.5v-6Zm1.95.78a5.5 5.5 0 0 1 .55 2.22 4.9 4.9 0 0 1-.55 2.22.5.5 0 1 1-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 0 0-.23-.56.5.5 0 1 1 .9-.44ZM17 9.98V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5v-.5c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9.8c-.3.17-.66.24-1 .18ZM8.5 13a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z";
   var pathdfilled = "M13.7 2.04c.18.08.3.26.3.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-1.7 1.08a5.5 5.5 0 0 1 .55 2.22 4.9 4.9 0 0 1-.55 2.22.5.5 0 1 1-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 0 0-.23-.56.5.5 0 1 1 .9-.44Zm.4 6.42a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 8h-.38A1.5 1.5 0 0 1 9 6.5v-2c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9.8c-.5.29-1.15.27-1.65-.1ZM8.5 13h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z";
   
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